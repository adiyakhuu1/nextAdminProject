"use client";

import * as React from "react";

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Route, Settings } from "lucide-react";
import { EditUserInfo } from "./edit-userinfo";
import { useState } from "react";
import { TheDetails } from "./details";
import Link from "next/link";

export function UsersTable(props) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  // const [seeDetailsRoute, setseeDetailsRoute] = useState(false);
  const [seeDetails, setseeDetails] = useState(false);
  const [searchUser, setSearch] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");

  const { data } = props;
  const [selected, changSelected] = useState("");
  let next = props.next;
  const filteredUser = data?.filter((user) =>
    user.firstname.includes(searchUser)
  );

  console.log(filteredUser);
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(searchUser);
          }}
          placeholder="Нэрээр хайх..."
          className="max-w-sm"
        />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">#</TableHead>
              <TableHead className="w-1">Зураг</TableHead>
              <TableHead className="w-1">Овог</TableHead>
              <TableHead>Нэр</TableHead>
              <TableHead>И-Мэйл</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="w-1">
                <Settings />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUser?.slice(0, next + 10).map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableHead>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.imageUrl} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableHead>
                <TableHead>{item.firstname}</TableHead>
                <TableHead>{item.lastname}</TableHead>
                <TableHead>{item.email}</TableHead>
                <TableHead>
                  <Link href={`/users/${item.id}`}>
                    <button
                      onClick={() => {
                        setseeDetails(true);
                        setCurrentName(item.firstname);
                        setCurrentLastName(item.lastname);
                        setCurrentEmail(item.email);
                      }}
                    >
                      Details
                    </button>
                  </Link>
                </TableHead>

                <TableHead></TableHead>
                <TableHead className="w-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(item.email)
                        }
                      >
                        Copy Email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          changSelected(item.id);
                          setEditModalOpen(true);
                          setCurrentEmail(item.email);
                          setCurrentLastName(item.lastname);
                          setCurrentName(item.firstname);
                        }}
                      >
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={async () => {
                          await fetch(`/api/users/${item.id}`, {
                            method: "DELETE",
                          });
                          props.refresh();
                          // props.setNext(next - 2);
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
              </TableRow>
            ))}
            <EditUserInfo
              open={editModalOpen}
              onClose={setEditModalOpen}
              id={selected}
              refresh={props.refresh}
              sendName={currentName}
              sendEmail={currentEmail}
              sendLastName={currentLastName}
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
