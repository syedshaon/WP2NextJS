import React from "react";

const Form = () => {
  return (
    <div className="contact-form w-full xl:w-1/2 px-5">
      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
        <div className="wpcf7 js" id="wpcf7-f1959-p64-o1" lang="en-US" dir="ltr">
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
          </div>
          <form action="/wp1/contact/#wpcf7-f1959-p64-o1" method="post" className="wpcf7-form init" aria-label="Contact form" data-status="init">
            <div style={{ display: "none" }}>
              <input type="hidden" name="_wpcf7" defaultValue={1959} />
              <input type="hidden" name="_wpcf7_version" defaultValue="5.9.8" />
              <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f1959-p64-o1" />
              <input type="hidden" name="_wpcf7_container_post" defaultValue={64} />
              <input type="hidden" name="_wpcf7_posted_data_hash" />
            </div>
            <p>
              <label>
                Your name
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" autoComplete="name" aria-required="true" aria-invalid="false" type="text" name="your-name" />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                Your email
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-email">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" autoComplete="email" aria-required="true" aria-invalid="false" type="email" name="your-email" />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                Subject
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-subject">
                  <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" type="text" name="your-subject" />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                Your message (optional)
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-message">
                  <textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" name="your-message" defaultValue={""} />
                </span>{" "}
              </label>
            </p>
            <p>
              <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" defaultValue="Submit" />
              <span className="wpcf7-spinner" />
            </p>
            <div className="wpcf7-response-output" aria-hidden="true" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
