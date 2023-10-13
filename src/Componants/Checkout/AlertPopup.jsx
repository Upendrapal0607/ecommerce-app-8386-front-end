import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

const AlertPopup = ({ isOpen, onOpen, onClose }) => {
  const cancelRef = React.useRef()


  return (
    <div>

      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader></AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody fontSize={20} fontWeight={600} color={"green"}>
            <p>Thank you for shopping with us. Your order has been successfully placed.</p>
            <p>An email confirmation has been sent to your email address.</p>
          </AlertDialogBody>
          <AlertDialogFooter>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default AlertPopup
