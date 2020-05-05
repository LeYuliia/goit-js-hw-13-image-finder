export default {
  searchQuery: '',
  page: 1,
  key: '16105184-e3637ab62bfe8e9d6c971f373',
  fetchImage() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    )
      .then(res => res.json())
      .then(data => {
        return data.hits;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
