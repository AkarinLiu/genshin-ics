export const siteData = JSON.parse("{\"base\":\"/genshin-ics/\",\"lang\":\"en-US\",\"title\":\"Genshin-ics\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/img/paimon-shock.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
