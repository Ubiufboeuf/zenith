export interface SearchSectionProps {
  id: string
  placeholder?: string
  class?: string

  onSearch: (newQuery: string) => void
}
