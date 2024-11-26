import React, { memo } from "react";
import { JumbotronWrapper } from "./common";

function Module1() {
  return <JumbotronWrapper title="Module - 1" />;
  //   const selectedRole = "Admin";

  //   return (
  //     <JumbotronWrapper
  //       title="Welcome"
  //       description="This is your dashboard."
  //       role={selectedRole}
  //       col={{ md: 8 }}
  //     >
  //       <p>Manage your tasks efficiently.</p>
  //     </JumbotronWrapper>
  //   );
}

export default memo(Module1);
