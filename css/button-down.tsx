import React, { FormEvent } from "react";

export const ButtonDown = (props) => {
  const submitAction = () => {
    window.open("https://buttondown.email/reddy2go", "popupwindow");
  };

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/reddy2go"
      method="post"
      target="popupwindow"
      onSubmit={submitAction}
    >
      <div className="grid grid-cols-3 grid-rows-1 space-x-1 gap-1">
        <label className="max-w-xs self-end text-right" htmlFor="bd-email">
          subscribe to the newsletter
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          className="border border-black"
        />
        <input type="hidden" value="1" name="embed" />

        <input
          type="submit"
          value="Subscribe"
          className="text-black rounded-sm bg-gray-300 font-medium"
        />
      </div>
    </form>
  );
};
