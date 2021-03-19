import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchPostsAsync } from '../store/posts/actions';

export function usePaging({
  extraParams = {},
  actionAsync = actFetchPostsAsync,
  funcSelector = state => state.Posts.articlesPaging
} = {}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const itemsPaging = useSelector(funcSelector);

  const {
    items,
    page,
    per_page,
    total_pages,
    total_element
  } = itemsPaging;
  const hasMoreItems = page < total_pages;

  async function handleLoadMore() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    await dispatch(actionAsync({
      page: page + 1,
      per_page: per_page,
      ...extraParams
    }))
    setIsLoading(false);
  }

  return {
    items,
    isLoading,
    hasMoreItems,
    total_element,
    handleLoadMore
  }
}