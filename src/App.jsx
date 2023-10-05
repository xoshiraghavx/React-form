import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function App() {
  return (
    <div className="flex justify-center my-16">
    <Card color="transparent place-content-center" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Registration Form
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Full Name" />
          <Input size="lg" label="Email Id" />
          <Input size="lg" label="Phone Number" />
          <Input size="lg" label="College Name" />
          <Input size="lg" label="Current Year" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;share my details
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        {/* <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography> */}
      </form>
    </Card>
    </div>
  );
}