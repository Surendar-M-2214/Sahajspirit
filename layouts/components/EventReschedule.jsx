import { AlertTriangle } from "lucide-react";

const EventReschedule = () => {
  return (
    <div className="flex justify-center items-center m-auto h-screen p-4 bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-yellow-500">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-12 w-12 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Event Rescheduled</h2>
        <p className="text-gray-700 mb-4">
          Due to the excitement surrounding the upcoming India-Pakistan match, we have decided to reschedule our event to a later date. Stay tuned for more details!
        </p>
        <p className="text-gray-700 font-medium">
          आगामी भारत-पाकिस्तान मैच को लेकर उत्साह के कारण हमने अपने कार्यक्रम को बाद की तिथि पर पुनर्निर्धारित करने का निर्णय लिया है। अधिक जानकारी के लिए हमसे जुड़े रहें!
        </p>
      </div>
    </div>
  );
};

export default EventReschedule;