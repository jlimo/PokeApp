// import React, { useState, useEffect } from "react";
// import {
//     Button,
//     PopoverTrigger,
//     PopoverContent,
//     Popover,
//     PopoverHeader,
//     PopoverCloseButton,
//     PopoverBody,
//     PopoverFooter,
//     PopoverArrow,
//     Box,
//     ButtonGroup,
//     useDisclosure,
// } from "@chakra-ui/core";

// function addPokemonTeam(props) {
//     const initialFocusRef = React.useRef();
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [userTeam, setUserTeam] = useState([]);
//     useEffect(() => {
//         if (props.user) {
//             fetch("/teams")
//             .then((res) => res.json())
//             .then((json) => setUserTeam(json.data && json.data.teams));
//         }
//     }, []);

//     const { currentTeam } = props;
//     const teamNames = (currentTeams || []).map((t) => t.name);

// return (
//     <Popover
//       isOpen={isOpen}
//       onOpen={onOpen}
//       onClose={onClose}
//       intialFocusRef={initialFocusRef} 
//       closeOnBlur={false}
//       placement="center"
//       >
//           <PopoverTrigger>
//           <Button variant="outline" color="blue" position="relative" mt="8px">
//           (╯°□°)╯︵◓
//           </Button>
//           </PopoverTrigger>
//           <PopoverContent 
//             color="red"
//             bg="blue.400"
//             borderColor="blue.400"
//             > 
//           <PopoverHeader fontWeight="bold">
//             add to Team
//             </PopoverHeader>
//             <PopoverArrow />
//             <PopoverCloseButton />
//             <PopoverBody>
//                 {userTeam &&
//                 userTeam.map((collection) => {
//                     if (teamNames.includes(teams.name)) {
//                         return null;
//                     }
//                     return (
//                     <Button 
//                     variant="outline"
//                     bg="blue.400"
//                     onClick={() => {
//                         fetch(`/teams/${teams.name}/${props.id}`), {
//                             method: "POST",
//                             headers: {
//                                 "Content-Type": "application/json",
//                             },
//                             body: JSON.stringify({ hello: "AHHHHHH" }),
//                     };
//                     window.location.reload();
//                 }}
//                     >
//                     {team.name}
//                     </Button>
//                 );
//                 })}
//             </PopoverBody>
//             </PopoverContent>
//       </Popover> 
//     );
// }

// export default addPokemonTeam;