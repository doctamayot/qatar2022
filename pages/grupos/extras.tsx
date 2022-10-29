import { AuthLayout } from "../../components/layouts";

import type { NextPage } from "next";

import { Extras } from "../../components/Extras";

const Extras1: NextPage = () => {
  return (
    <AuthLayout title="Extras" aviso="true">
      <Extras />
    </AuthLayout>
  );
};

export default Extras1;
