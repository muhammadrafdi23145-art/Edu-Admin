import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Masuk"
        description="Masuk untuk pengguna yang sudah memiliki akun"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
