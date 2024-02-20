"use client";
import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const BreadCrump = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pathnames = pathname.split("/").filter(Boolean);
  return (
    <>
      <Container>
        <MUIBreadcrumbs aria-label="breadcrumb">
          {pathnames.length ? (
            <Link onClick={() => router.push("/")}>Home</Link>
          ) : (
            <Typography> Home </Typography>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            let names = name.replace(/-/g, " ");
            // console.log(name, "name");
            return isLast ? (
              <Typography key={names}>{names}</Typography>
            ) : (
              <Link key={names} onClick={() => router.push(routeTo)}>
                {names}
              </Link>
            );
          })}
        </MUIBreadcrumbs>
      </Container>
    </>
  );
};

export default BreadCrump;
