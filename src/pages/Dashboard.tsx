import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const { embedUrl } = useAppSelector((state) => state.app);

  // const embedUrl =
    // "https://us-east-2.quicksight.aws.amazon.com/embed/b7dc5d7bb0a6455a9a58a1887a1c9513/dashboards/668c3796-6fe2-4b0c-84a4-91938c433042?isauthcode=true&identityprovider=quicksight&code=AYABeHm_GTd7zuvL0N36DE6DuLAAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTI6MjU5MzgxNDUwNDA2OmtleS8xZGQ4NmNiNy01MmE3LTQxMTItYTEyOC0zNTYzMzU0ODViZTkAuAECAQB4m51f34cDbPnyMU79O7UitKQG7QVycvU4zSKLDIeiq_MBI2I7nMP9KjNF9AZn7u-a3wAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOtfV2vIy6bJ0hi5AwIBEIA78blDmH85_62k7mlp_yWYVnu_hk-k6GZT4k6Pfh-IVIzy0JUBjWwBzuGzrTEUlsDoQy7NRGTww-oBY24CAAAAAAwAABAAAAAAAAAAAAAAAAAAgei87L7cVy8xLg90-AtgY_____8AAAABAAAAAAAAAAAAAAABAAAAoV6324oPcC8aoqLc6n6SNw4oZqvGGMXIfvE3LFjAoIkhRPu1RiCcEIcJZ6fTfw8f4-lpXvJEoOuhGIKqJW_yw74Msl856ufz7LKEz_itYby_g4dT9CT7fgBV71MmVP240y7egx5bE8HMRPA_z7U9Jgzw94tTbpXgBWNTM58jeqpY2hcpLP_aHMhCHOrCodkJlii6KT-8de3Zy_Ysaqg6DAlwGPzUvncojHSYtHQjyxmNeQ%3D%3D";
  return (
    <div className="w-screen px-4 mt-10">
      <iframe
        className="w-full h-[80vh]"
        title="QuickSight Dashboard"
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default Dashboard;
