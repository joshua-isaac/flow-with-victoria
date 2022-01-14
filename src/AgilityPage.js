import React, { useEffect } from "react"
import { graphql } from "gatsby"
import agilityUtils from "./agility/utils"
import AgilityPageTemplate from "./agility/components/AgilityPageTemplate"
//Some things we need for our layout
import LayoutTemplate from "./components/LayoutTemplate"
import PreviewBar from "./components/PreviewBar"
import GlobalHeader from "./components/GlobalHeader"
import GlobalFooter from "./components/GlobalFooter"
import SEO from "./components/SEO"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Main.scss"
import "./snipcart.css"

//Our query to get the our page data and check for a dynamic page item (agilityItem)
export const query = graphql`
  query($pageID: Int!, $contentID: Int!, $languageCode: String!) {
    agilitypage(languageCode: { eq: $languageCode }, itemID: { eq: $pageID }) {
      pageJson
    }
    agilityitem(
      languageCode: { eq: $languageCode }
      itemID: { eq: $contentID }
    ) {
      itemJson
    }
    agilityGlobalHeader {
      customFields {
        siteName
      }
    }
  }
`

const AgilityPage = ({ pageContext, data }) => {
  useEffect(() => {
    const { Snipcart } = window
    if (!Snipcart) return
    console.log("Snipcart: ", Snipcart)
    const init = async () => {
      const { customer } = await Snipcart.store.getState()
      console.log("customer: ", customer)
      // const subscriptions = await Snipcart.api.customer.fetchOrders({
      //   offset: 0,
      //   limit: 5,
      // })
      // console.log(subscriptions)
    }
    init()
  }, [])
  const viewModel = agilityUtils.buildPageViewModel({ pageContext, data })
  return (
    <LayoutTemplate>
      <SEO
        title={viewModel.page.title}
        description={viewModel.page.seo.metaDescription}
        keywords={viewModel.page.seo.metaKeywords}
      />
      <PreviewBar isPreview={viewModel.isPreview} />
      <GlobalHeader
        languageCode={viewModel.languageCode}
        isMultiLanguage={viewModel.isMultiLanguage}
        header={data.agilityGlobalHeader}
      />
      <main className="main">
        <AgilityPageTemplate {...viewModel} />
      </main>
      <GlobalFooter />
    </LayoutTemplate>
  )
}

export default AgilityPage
