import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Background(){
  const image='https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Box
      stylesheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${image}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
    </Box>
  )
}
