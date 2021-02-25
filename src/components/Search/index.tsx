import {
  ClickAwayListener, Container,
  InputBase,
  List,
  makeStyles, Paper,
  Popper
} from '@material-ui/core'
import { throttle } from 'lodash'
import React, { useCallback, useMemo, useState } from 'react'
import { useAsync, useList } from 'react-use'

import { Investment } from '../../type'

export type SearchProps = {
  onSearch: (query: string) => Promise<Investment[]>
}

const useStyles = makeStyles(theme => ({
  root: {
    color: 'inherit'
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width')
  },
  popper: {
    zIndex: theme.zIndex.modal
  },
  resultRoot: {
    backgroundColor: theme.palette.background.default,
    width: 350
  }
}))

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [query, setQuery] = useState('')
  const [selected, { set: setSelected }] = useList([])
  const [options, { set: setOptions }] = useList<Investment>([])

  const fetch = useMemo(() => throttle(onSearch, 300, { leading: false, trailing: true }), [onSearch])
  useAsync(async () => {
    if (query === '') {
      // don't request when no query
      return
    }
    const results = await fetch(query)
    if (results) {
      setOptions(results)
    }
  }, [query, fetch])

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [query, options])

  const handleClose = useCallback(() => {
    // save
    if (anchorEl) {
      anchorEl.focus()
    }
    setAnchorEl(null)
  }, [])
  const open = useMemo(() => Boolean(anchorEl), [anchorEl])
  const id = useMemo(() => (open ? 'search-label' : undefined), [open])

  return (
    <React.Fragment>
      <InputBase
        aria-describedby={id}
        classes={{
          root: classes.root,
          input: classes.input
        }}
        value={query}
        onClick={handleClick}
        onChange={(event) => {
          setQuery(event.currentTarget.value as string)
        }}
        placeholder='搜索'
      />
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        className={classes.popper}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper className={classes.resultRoot}>
            <Container>
              <List>
              </List>
            </Container>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </React.Fragment>
  )
}

export default Search
