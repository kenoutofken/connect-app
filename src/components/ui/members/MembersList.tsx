import { useMemo, useCallback, useRef, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";
import Member from "./Member";
import { fetchMembers } from "@/lib/api";
import styles from "./MembersList.module.css";
import { type Member as MemberType } from "@/lib/types/member";

export default function MembersList() {
  const [nameFilter, setNameFilter] = useState("");
  const inputRef = useRef(null);

  const filterMembers = useCallback(
    (member: MemberType) => {
      return (
        member.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
        member.lastName.toLowerCase().includes(nameFilter.toLowerCase())
      );
    },
    [nameFilter]
  );

  const { data } = useSuspenseQuery({
    queryKey: ["members"],
    queryFn: () => fetchMembers(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const clearField = () => {
    setNameFilter("");
    // put cursor back in the field for a quick new search
    inputRef.current?.focus();
  };

  const filteredMembers = useMemo(
    () =>
      data.users.filter(
        (member: MemberType) =>
          member.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          member.lastName.toLowerCase().includes(nameFilter.toLowerCase())
      ),
    [data.users, nameFilter]
  );

  return (
    <>
      <div className="relative">
        <Input
          name="search-members"
          value={nameFilter}
          onChange={(event) => setNameFilter(event.target.value)}
          placeholder="Search members"
          className={`pl-10 ${styles.searchField}`}
        />
        <MagnifyingGlassIcon className="size-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <XMarkIcon
          className={`${
            nameFilter ? "block" : "invisible"
          } size-5 absolute top-1/2 right-5 -translate-y-1/2 text-gray-400 cursor-pointer`}
          onClick={clearField}
        />
      </div>
      <ul className="mt-3">
        {filteredMembers.length === 0 ? (
          <li className="text-gray-500">
            No members found. Try a different search.
          </li>
        ) : (
          filteredMembers.map((user) => <Member key={user.id} member={user} />)
        )}
        {data.users.filter(filterMembers).map((user) => (
          <Member key={user.id} member={user} />
        ))}
      </ul>
    </>
  );
}
