import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchPostsAsync } from '../store/posts/actions';

export function usePostsPaging({
  extraParams = {}
} = {}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const articlesPaging = useSelector(state => state.Posts.articlesPaging);

  const {
    items: posts,
    page,
    per_page,
    total_pages,
    total_element
  } = articlesPaging;
  const hasMoreItems = page < total_pages;

  async function handleLoadMore() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    await dispatch(actFetchPostsAsync({
      page: page + 1,
      per_page: per_page,
      ...extraParams
    }))
    setIsLoading(false);
  }

  return {
    posts,
    isLoading,
    hasMoreItems,
    total_element,
    handleLoadMore
  }
}