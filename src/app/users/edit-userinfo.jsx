import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const EditUserInfo = ({
  open,
  onClose,
  id,
  refresh,
  sendName,
  sendEmail,
  sendLastName,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  // const [id, setId] = useState("");

  async function submit() {
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstname: name,
        lastname: lastName,
        email: email,
      }),
    });
    const data = await res.json();
    // const response = await theName.json();
    console.log(data);
    refresh();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* 1 */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              id="name"
              defaultValue={sendName}
            />
          </div>
          {/* 2 */}
          <div className="grid gap-2">
            <Label htmlFor="Lastname">Last Name</Label>
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
                console.log(lastName);
              }}
              id="username"
              defaultValue={sendLastName}
            />
          </div>
          {/* 3 */}
          {/* <div className="grid gap-2">
            <Label htmlFor="username">ID</Label>
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
              id="username"
              defaultValue="@peduarte"
            />
          </div> */}
          {/* 4 */}
          <div className="grid gap-2">
            <Label htmlFor="Email">Email</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              id="username"
              defaultValue={sendEmail}
            />
          </div>
          {/* 5 */}
          {/* <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
              id="username"
              defaultValue="@peduarte"
            />
          </div> */}
          {/* Ends here */}
        </div>
        <DialogFooter>
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button
            onClick={() => {
              submit();
              onClose(false);
              refresh();
            }}
            type="submit"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
