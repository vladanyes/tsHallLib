export interface ResourceCollection<T, K extends string> {
  _embedded: { [P in K]: Array<Resource<T>> }
  _links: {
    self: HalLink
    next?: HalLink
    prev?: HalLink
  }
  page: HalPage
}

export interface HalLink {
  href: string
  templated?: boolean
}

export interface HalPage {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export interface HalLinks {
  _links: {
    self: HalLink
    landingPage: HalLink
  }
}

export type Resource<T> = T & HalLinks
