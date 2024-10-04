import { InfoIcon, WarnIcon } from "@/assets/SvgIcons";
import toast, { Renderable, Toast } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";

type ToastOptions = Partial<
  Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">
>;

type ValueOrFunction<T, U> = T | ((value: U) => T);


class showToastClass {
  constructor() {
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.info = this.info.bind(this);
    this.warn = this.warn.bind(this);
    this.loading = this.loading.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  private addCloseButton(content: Renderable, onClose: () => void): Renderable {
    return (
      <>
        {content}
        <button
          onClick={onClose}
          style={{
            marginLeft: "10px",
            marginRight: "-10px",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
        >
          <MdOutlineClose />
        </button>
      </>
    );
  }

  success(message: string, options?: ToastOptions) {
    toast.success(
      this.addCloseButton(message, () => toast.dismiss()),
      options
    );
  }

  error(message: string, options?: ToastOptions) {
    toast.error(
      this.addCloseButton(message, () => toast.dismiss()),
      options
    );
  }
  info(message: string, options?: ToastOptions) {
    toast.success(
      this.addCloseButton(message, () => toast.dismiss()),
      {
        ...options,
        ariaProps: { role: "alert", "aria-live": "assertive" },
        icon: <InfoIcon />,
        duration: 6000,
      }
    );
  }
  warn(message: string, options?: ToastOptions) {
    toast.success(
      this.addCloseButton(message, () => toast.dismiss()),
      {
        ...options,
        ariaProps: { role: "alert", "aria-live": "assertive" },
        icon: <WarnIcon />,
        duration: 6000,
      }
    );
  }

  loading(message: string, options?: ToastOptions) {
    const toastId = toast.loading(
      this.addCloseButton(message, () => toast.dismiss()),
      options
    );

    return toastId;
  }
  dismiss(id?: string) {
    toast.dismiss(id);
  }

  promise<T>(
    promise: Promise<T>,
    msgs: {
      loading: Renderable;
      success: ValueOrFunction<Renderable, T>;
      error: ValueOrFunction<Renderable, Error>;
    },
    options?: ToastOptions
  ) {
    toast.promise(promise, msgs, options);
  }
}

const showToast = new showToastClass();
export default showToast;
