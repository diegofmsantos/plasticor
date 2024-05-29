import { DialogTitle } from "@radix-ui/react-dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { FormClient } from "./form"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Dados do Cliente</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                    <FormClient />
                </div>
            </DialogContent>
        </Dialog>
    )
}