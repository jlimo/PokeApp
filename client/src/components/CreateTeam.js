// import { 
//     FormControl,
//      Modal,
//       ModalContent,
//       ModalHeader,
//       ModalBody,
//       ModalFooter,
//       Button,
//       Text,
//       Input,
//      } from "@chakra-ui/core";
// import React, { useState } from "react";

// function createTeamModal({
//     isOpen,
//     onClose,
//     shouldFetch,
//     SetShouldFetch,
// }) {
//     const [teamName, setTeamName] = useState({ name: ""});
//     const handleChange = (e) => {
//         setTeamName({
//             name: e.target.value,
//         });
//     };
//     const handleSubmit = async (e) => {
//         await onClose(teamName);
//         e.preventDefault();
//         await fetch("/pokemon_team", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(teamName),
//         });
//         SetShouldFetch(!shouldFetch);
//     };

//     return (
//         <>
//         <Modal isOpen={isOpen} closeOnOverlayClick={true}>
//             <form onSubmit={handleSubmit}>
//         <ModalOverlay bg="rgb(0 0 0 /80%)" />
//         <ModalContent
//         bg="yellow.900"
//         bgPos="center"
//         color="grey.200"
//         borderRadius="lg"
//         boxShadow="1px 3px 32px #4a3853"
//         >
//         <ModalHeader>Create Team</ModalHeader>
//         <ModalBody>
//             <Text mb={4}>Enter collection name below and save</Text>
//             <FormControl>
//                 <Input
//                 type="text"
//                 id="Team-name"
//                 placeholder="Create Team"
//                 color="red"
//                 onChange={handleChange}
//                 value={teamName.name}
//                 name="name"
//                 />
//             </FormControl>
//         </ModalBody>
//         <ModalFooter>
//             <Button
//             type="submit"
//             variantColor="yellow"
//             mr={3}
//             onClick={() => {}}
//             >
//             createTeam
//             </Button>
//             <Button variantColor="red" mr={2} onClick={onClose}>
//             Close
//             </Button>
//         </ModalFooter>
//         </ModalContent>
//         </form>
//         </Modal>
//         </>
//     );
// }

// export default createTeamModal;