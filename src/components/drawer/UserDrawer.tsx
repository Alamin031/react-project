// /* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import {
//   Drawer,
//   Typography,
//   IconButton,
//   Button,
//   Input,
//   Textarea,
// } from '@material-tailwind/react';
// import UserContextType from '@/types/UserContextType';
// import { useUserContext } from '../context/uaersContext';

// function UserDrawer(): JSX.Element {
//   const { isDrawerOpen, closeDrawer } =
//     useUserContext() as UserContextType;
//   return (
//     <Drawer
//       placement="right"
//       open={isDrawerOpen}
//       onClose={closeDrawer}
//       className="Drawer p-4"
//       size={600}
//     >
//       <div className="flex items-center justify-between px-4 pb-2">
//         <Typography variant="h5" color="blue-gray">
//           Contact Us
//         </Typography>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           onClick={() => {
//             closeDrawer();
//           }
//           }
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </IconButton>
//       </div>
//       <div className="mb-5 px-4">
//         <Typography variant="small" color="gray" className="font-normal ">
//           Write the message and then click button.
//         </Typography>
//       </div>
//       <form className="flex flex-col gap-6 p-4">
//         <Typography variant="h6" color="blue-gray" className="-mb-3">
//           Your Email
//         </Typography>
//         <Input type="email" label="Email" crossOrigin={undefined} />
//         <Input label="Subject" crossOrigin={undefined} />
//         <Textarea rows={6} label="Message" />
//         <Button>Send Message</Button>
//       </form>
//       </Drawer>

//   );
// }

// export default UserDrawer;