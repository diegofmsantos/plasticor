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
            <DialogContent className="flex flex-col h-full overflow-y-auto px-4">
                <DialogHeader>
                    <DialogTitle className="h-10 text-xl font-bold text-center mb-2">DADOS DO CLIENTE</DialogTitle>
                </DialogHeader>
                <div className="flex-1">
                    <FormClient />
                </div>
            </DialogContent>
        </Dialog>
    )
}