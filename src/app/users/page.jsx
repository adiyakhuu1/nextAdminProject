"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/typography/h3";
import { UsersTable } from "./table";
import { UserCreateDialog } from "./user-create-dialog";
import { useEffect, useState } from "react";
import { TheDetails } from "./details";

const Users = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const refreshUsers = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <TypographyH3>Хэрэглэгчид</TypographyH3>
            <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
              Шинээр нэмэх
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable
            refresh={refreshUsers}
            data={data}
            next={next}
            setNext={setNext}
          />
          <div className="flex justify-center p-8">
            <Button
              onClick={() => {
                setNext(next + 10);
                refreshUsers();
              }}
              variant="outline"
            >
              Load more...
            </Button>
          </div>
        </CardContent>
      </Card>

      <UserCreateDialog
        open={createModalOpen}
        onClose={setCreateModalOpen}
        refresh={refreshUsers}
      />

      {/* <EditUserInfo open={createModalOpen} onClose={setEditModalOpen} /> */}
    </div>
  );
};

export default Users;
