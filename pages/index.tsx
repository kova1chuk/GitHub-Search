import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import searchReposActions from "store/repoSearch/actions";
import { Header, Pagination } from "components";
import { SearchResult } from "containers";

function HomePage({ total_count, repos, fetchSearch }) {
  const [curPage, setCurPage] = useState(1);
  const [curRequest, setCurRequest] = useState("");

  const onSearch = (request: string) => {
    setCurRequest(request);
    fetchSearch({
      q: request,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage,
    });
    setCurPage(1);
  };

  const onPaginationClick = (value) => {
    if (value === "Prev") {
      if (curPage !== 1) setCurPage(curPage - 1);
    } else if (value === "Next") {
      if (curPage !== Math.floor(total_count / 30)) setCurPage(curPage + 1);
    } else if (curPage.toString !== value) {
      setCurPage(Number(value));
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (curRequest === "") return;
    fetchSearch({
      q: curRequest,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage,
    });
  }, [curPage]);

  return (
    <>
      <Header onSearch={onSearch} />
      {repos && (
        <>
          <SearchResult total_count={total_count} repos={repos} />
          <div className="content-center">
            <Pagination
              count={Math.floor(total_count / 30)}
              current={curPage}
              onClick={onPaginationClick}
            />
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = ({ repoSearchReducer }) => ({
  total_count: repoSearchReducer.total_count,
  repos: repoSearchReducer.repos,
});
const mapDispatchToProps = { fetchSearch: searchReposActions.fetchSearch };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
