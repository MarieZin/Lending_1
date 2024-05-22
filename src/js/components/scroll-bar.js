var {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
  } = OverlayScrollbarsGlobal

const overlayScrollbar = OverlayScrollbars(document.querySelector('body'), {
  scrollbars: {
    theme: 'os-theme-light'
  }
})

function scrollbarOff() {
  overlayScrollbar.options({overflow: {
      x: 'hidden',
      y: 'hidden'
  }})
}

function scrollbarOn() {
  overlayScrollbar.options({overflow: {
      x: 'scroll',
      y: 'scroll'
  }})
}
