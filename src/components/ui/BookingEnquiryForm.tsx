import { MessageCircle, X } from "lucide-react"
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react"
import { Fieldset } from "@/components/ui/heroui-fieldset"

const field = {
  label: "text-[#111827] font-semibold text-sm mb-0.5 cursor-default",
  inputWrapper: [
    "border border-[#d1d5db] rounded-[10px] bg-white shadow-none px-0",
    "data-[hovered=true]:border-[#d4a73d]",
    "data-[focused=true]:border-[#d4a73d]",
    "data-[focused=true]:ring-[3px] data-[focused=true]:ring-[#d4a73d]/20",
    "transition-all duration-200",
  ].join(" "),
  input: "text-[0.97rem] text-[#111827] placeholder:text-[#9ca3af] px-3.5 py-3",
  description: "text-[0.82rem] text-[#6b7280] mt-0.5",
  errorMessage: "text-[0.82rem] text-red-500 mt-0.5",
}

export function BookingEnquiryForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name        = data.get("name")?.toString()        ?? ""
    const phone       = data.get("phone")?.toString()       ?? ""
    const vehicle     = data.get("vehicle")?.toString()     ?? ""
    const pickup      = data.get("pickup")?.toString()      ?? ""
    const destination = data.get("destination")?.toString() ?? ""
    const details     = data.get("details")?.toString()     ?? ""

    const msg = encodeURIComponent(
      `Booking Enquiry\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nPickup: ${pickup}\nDestination: ${destination}\nDetails: ${details}`
    )
    window.open(`https://wa.me/918652747851?text=${msg}`, "_blank")
  }

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Quick Booking Enquiry</Fieldset.Legend>
        <Description>Fill in your details and we'll get in touch.</Description>

        <FieldGroup>
          <TextField
            isRequired
            name="name"
            classNames={field}
            validate={(v) => (v.length < 2 ? "Please enter your name" : null)}
          >
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="phone"
            type="tel"
            classNames={field}
            validate={(v) => (v.length < 6 ? "Enter a valid mobile number" : null)}
          >
            <Label>Mobile Number</Label>
            <Input placeholder="+91 98765 43210" />
            <FieldError />
          </TextField>

          <TextField name="vehicle" classNames={field}>
            <Label>Vehicle Type</Label>
            <Input placeholder="Luxury Bus, Tempo Traveller, Car/SUV…" />
            <FieldError />
          </TextField>

          <TextField isRequired name="pickup" classNames={field}>
            <Label>Pickup Location</Label>
            <Input placeholder="City or Area" />
            <FieldError />
          </TextField>

          <TextField isRequired name="destination" classNames={field}>
            <Label>Destination</Label>
            <Input placeholder="City or Area" />
            <FieldError />
          </TextField>

          <TextField name="details" classNames={field}>
            <Label>Travel Details</Label>
            <TextArea
              className="text-[0.97rem] text-[#111827] placeholder:text-[#9ca3af] px-3.5 py-3 min-h-[80px] resize-y"
              placeholder="Travel date, passenger count, special requirements…"
            />
            <Description>Optional — helps us give you an accurate quote</Description>
            <FieldError />
          </TextField>
        </FieldGroup>

        <Fieldset.Actions>
          <button type="submit" className="booking-submit-btn">
            <MessageCircle size={16} />
            WhatsApp Enquiry
          </button>
          <button type="reset" className="booking-reset-btn">
            <X size={14} />
            Clear
          </button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  )
}

export default BookingEnquiryForm
