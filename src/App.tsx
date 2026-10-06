import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { DirectoryToolbar } from "./components/DirectoryToolbar";
import { LoadingGrid } from "./components/LoadingGrid";
import { StatusPanel } from "./components/StatusPanel";
import { Pagination } from "./components/Pagination";
import { UserCard } from "./components/UserCard";
import { useUsers } from "./hooks/useUsers";
import { paginationSetting } from "./constants/pagination-constants";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const { users, isLoading, error, retry } = useUsers(
    page,
    paginationSetting.USERS_PER_PAGE,
  );

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(query.toLowerCase());
  });

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--paper) px-5 font-(--font-manrope) sm:px-[6vw]">
      <div className="pointer-events-none absolute -left-[220px] top-[360px] z-[-1] h-[410px] w-[410px] rounded-full bg-[#e1efc1] opacity-50 blur-[1px]" />
      <div className="pointer-events-none absolute -right-[180px] top-10 z-[-1] h-[330px] w-[330px] rounded-full bg-[#d8eae4] opacity-50 blur-[1px]" />
      <Header />
      <Intro />
      <section className="mx-auto max-w-[1240px] border border-(--line) bg-white/60 p-5 sm:p-8" id="directory" aria-label="Team directory">
        <DirectoryToolbar
          isLoading={isLoading}
          query={query}
          onQueryChange={setQuery}
        />
        {isLoading && <LoadingGrid />}
        {!isLoading && error && (
          <StatusPanel type="error" message={error} onRetry={retry} />
        )}
        {!isLoading && !error && filteredUsers.length === 0 && (
          <StatusPanel type="empty" />
        )}
        {!isLoading && !error && filteredUsers.length > 0 && (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
          </div>
        )}
        <Pagination
          page={page}
          totalPages={paginationSetting.TOTAL_PAGES}
          isLoading={isLoading}
          onPageChange={changePage}
        />
      </section>
      <Footer />
    </main>
  );
}

export default App;
