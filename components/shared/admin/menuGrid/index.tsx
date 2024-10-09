import React, { FC, useState } from "react";
import { Edit3, UtensilsCrossed, X } from "lucide-react";
import { AdminTable, Menus } from "@/types";
import Image from "next/image";
import orderImg from "public/orderimg.png";
import { handleRowClick } from "@/utils/modal";

const defaultInvoice: Menus = {
  MenuId: 0,
  Price: 0,
  Category: "",
  mealImage: "",
  Name: "",
  Discount: "",
  Department: "",
};

const MenuGrid = ({
  invoiceData,
  setIsOpen,
  setSelectedInvoice,
  selectedInvoice,
}: AdminTable) => {
  let tabKey: any = "";
  let tabValue: any = "";

  const handleTabChange: any = (event: any, key: any, value: any) => {
    tabKey = key;
    tabValue = value;
  };

  return (
    <div>
      <div className="flex flex-wrap md:justify-start justify-center gap-4">
        {invoiceData.map((invoice: Menus, index: number) => (
          <div
            onClick={() =>
              handleRowClick(invoice, setIsOpen, setSelectedInvoice)
            }
            className={`${
              selectedInvoice.OrderID === invoice.MenuId
                ? "border border-primary-green bg-[#1e240a]"
                : "bg-primary-dark"
            } md:w-auto w-full cursor-pointer text-sm text-white rounded-md py-3`}
          >
            <div className="flex w-full border-b border-primary-border pb-3 px-4">
              <div>
                <div className="w-full flex flex-col items-center gap-x-1  justify-between">
                  <p>${invoice.Price}</p>

                  <div className="flex flex-col gap-x-2">
                    <div className="w-8">
                      <Image
                        alt="img"
                        src={orderImg}
                        className="w-10 h-8 rounded-md"
                      />
                    </div>
                    <div className="w-28">
                      <p className="text-ellipsis overflow-hidden">
                        {invoice.Name}
                      </p>
                    </div>
                    {/* {invoice.MenuItems.length > 1 ? (
                            <h1 className="m-auto w-fit h-fit py-[0.1rem] px-[0.3rem] border-2 border-primary-green border-dashed rounded-full font-medium">
                              +{invoice.MenuItems.length - 1}
                            </h1>
                          ) : null} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-secondary-border">
              <div className="px-4 py-6">
                <div className="pl-1 flex justify-between">
                  <h1 className="text-primary-green font-medium">
                    View Details
                  </h1>
                  <div className="flex gap-x-4">
                    <X />
                    <Edit3 />
                  </div>
                </div>
              </div>
              <div className="gap-x-8 px-4 flex justify-between">
                <div className="flex gap-x-2">
                  <div className="flex gap-x-1">
                    <UtensilsCrossed className="w-4" />
                    <h1>{invoice.Category}</h1>
                  </div>
                </div>
                <p
                  className={`status-cancelled font-medium status-pending text-center flex items-center rounded-xl py-[0.1rem] px-3 w-fit`}
                >
                  {invoice.Department}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
