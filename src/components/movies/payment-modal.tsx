import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMovieStore } from "@/store/movie-store";

export function PaymentModal() {
  const checkoutMovie = useMovieStore((state) => state.checkoutMovie);
  const paymentStatus = useMovieStore((state) => state.paymentStatus);
  const closeCheckout = useMovieStore((state) => state.closeCheckout);
  const completePayment = useMovieStore((state) => state.completePayment);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  if (!checkoutMovie) {
    return null;
  }

  const isReadyToPay = cardName.trim() && cardNumber.trim() && expiry.trim() && cvc.trim();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6">
      <Card className="w-full max-w-md bg-background shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Simulated checkout</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {paymentStatus === "success" ? (
            <div className="space-y-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              <p className="font-semibold">Payment completed successfully.</p>
              <p>{checkoutMovie.title} is now available in your purchases.</p>
              <Button type="button" className="w-full" onClick={closeCheckout}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="rounded-xl border bg-muted/40 p-3">
                <p className="text-sm font-semibold">{checkoutMovie.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">Total: $9.99</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Cardholder name</label>
                <Input
                  value={cardName}
                  onChange={(event) => setCardName(event.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Card number</label>
                <Input
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiry</label>
                  <Input
                    value={expiry}
                    onChange={(event) => setExpiry(event.target.value)}
                    placeholder="12/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">CVC</label>
                  <Input
                    value={cvc}
                    onChange={(event) => setCvc(event.target.value)}
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline" className="flex-1" onClick={closeCheckout}>
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="flex-1"
                  disabled={!isReadyToPay || paymentStatus === "processing"}
                  onClick={() => completePayment()}
                >
                  {paymentStatus === "processing" ? "Processing..." : "Pay now"}
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
