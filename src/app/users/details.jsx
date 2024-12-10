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

export const TheDetails = ({
  open,
  onClose,
  id,
  refresh,
  sendName,
  sendEmail,
  sendLastName,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>The Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* 1 */}
          <div className="grid gap-2">
            <Label htmlFor="name">{sendName}</Label>
          </div>
          {/* 2 */}
          <div className="grid gap-2">
            <Label htmlFor="Lastname">{sendLastName}</Label>
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
            <Label>{sendEmail}</Label>
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
      </DialogContent>
    </Dialog>
  );
};
