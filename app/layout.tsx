import React from "react";

export default function RootLayout(
  {children,}:
    Readonly<{children: React.ReactNode;}>  //Readonly makes objects immutable
){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>

  )
}