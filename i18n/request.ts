import { getRequestConfig } from "next-intl/server"

import { routing } from "./routing"

type AppMessages = {
  common: typeof import("../messages/en/common.json")
  home: typeof import("../messages/en/home.json")
  pricing: typeof import("../messages/en/pricing.json")
  metadata: typeof import("../messages/en/metadata.json")
}

async function loadMessages(locale: string): Promise<AppMessages> {
  const [common, home, pricing, metadata] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/pricing.json`),
    import(`../messages/${locale}/metadata.json`),
  ])

  return {
    common: common.default,
    home: home.default,
    pricing: pricing.default,
    metadata: metadata.default,
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: await loadMessages(locale),
  }
})
