function! ClearEchoAndExecute(command)
  if has('nvim')
    -tabnew
    call termopen(a:command)
    startinsert
    return
  endif

  let message = '.editor/project.vim => ' . a:command
  let command = "echo -e '" . message . "' && " . a:command
  echo command

  if has('nvim')
    -tabnew
    call termopen(command)
    startinsert
    return
  endif

  let command = '! clear && ' . command
  execute command
endfunction

function! RunTestFile()
  let command = "bundle exec run_test " . expand('%')
  call ClearEchoAndExecute(command)
endfunction

function! RunTestFileFilteredByLine()
  let command = "bundle exec run_test " . expand('%') . " --line=" . line(".")
  call ClearEchoAndExecute(command)
endfunction

" javascript specify
autocmd FileType javascript nnoremap <buffer> <leader>T <esc>:call RunTestFile()<cr>
autocmd FileType javascript nnoremap <buffer> <leader>t <esc>:call RunTestFileFilteredByLine()<cr>
autocmd FileType javascript nnoremap <buffer> <leader>x <esc>:call ClearEchoAndExecute('time node ' . expand('%'))<cr>
