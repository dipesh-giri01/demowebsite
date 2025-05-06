
import { FiMail, FiGlobe, FiTag, FiClock, FiAlertCircle } from 'react-icons/fi';

const TicketCard= () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      {/* Header with Step Indicator */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-blue-400/30 p-3 rounded-full">
            <FiAlertCircle size={24} />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">Step 1</div>
            <h2 className="text-2xl font-bold mt-1">Smart Ticket Capture</h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-600">
          Email or portal-based ticket creation, with SLA Auto-tagging and prioritisation
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mx-6">
        <button className={`flex-1 py-3 text-center font-medium flex items-center justify-center gap-2 text-blue-600 border-b-2 border-blue-600`}>
          <FiGlobe className="text-lg" /> Portal Ticket
        </button>
        <button className={`flex-1 py-3 text-center font-medium flex items-center justify-center gap-2 text-gray-500`}>
          <FiMail className="text-lg" /> Email Ticket
        </button>
      </div>

      {/* Content Box */}
      <div className="p-6">
        {/* Placeholder Form */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
          <div className="mx-auto max-w-xs">
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-24 bg-gray-200 rounded mb-6"></div>
            <div className="flex justify-between mb-6">
              <div className="h-8 bg-blue-100 rounded-full px-4 py-1 text-sm text-blue-800 inline-flex items-center">
                <FiTag className="mr-1" /> Priority: Medium
              </div>
              <div className="h-8 bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-800 inline-flex items-center">
                <FiClock className="mr-1" /> SLA: 24h
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Create Ticket
            </button>
          </div>
        </div>

        {/* Auto-tagging Visualization */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Auto-tagging Preview</h3>
          <div className="flex flex-wrap gap-2">
            {['Technical', 'Urgent', 'Login Issue', 'Customer', 'SLA: 24h'].map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <FiTag size={12} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;