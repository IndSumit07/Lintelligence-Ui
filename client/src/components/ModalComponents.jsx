import React, { useState } from "react";
import { X, AlertCircle, CheckCircle, Info } from "lucide-react";

export const BasicModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect-orange border-2 border-orange-500/30 rounded-xl p-6 w-full max-w-md shadow-2xl shadow-orange-500/20 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-all"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-michroma text-white mb-4">Modal Title</h3>
        <p className="text-white/70 font-space mb-6">
          This is a basic modal component with glass morphism effect and smooth animations.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="glass-effect px-5 py-2.5 rounded-lg font-space font-semibold hover:glass-effect-orange transition-all"
          >
            Cancel
          </button>
          <button className="gradient-orange px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all glow-orange">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-white/10 rounded-xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
            <AlertCircle size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-michroma text-white mb-2">Confirm Action</h3>
            <p className="text-white/70 font-space text-sm">
              Are you sure you want to proceed? This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="glass-effect px-5 py-2.5 rounded-lg font-space font-semibold hover:bg-white/10 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-gradient-to-br from-red-500 to-red-600 px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all shadow-lg shadow-red-500/20"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-green-500/50 rounded-xl p-8 w-full max-w-md shadow-2xl shadow-green-500/20 text-center">
        <div className="inline-block p-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-4">
          <CheckCircle size={48} className="text-white" />
        </div>
        <h3 className="text-2xl font-michroma text-white mb-3">Success!</h3>
        <p className="text-white/70 font-space mb-6">
          Your action has been completed successfully.
        </p>
        <button
          onClick={onClose}
          className="gradient-orange px-6 py-3 rounded-lg font-space font-semibold hover:opacity-90 transition-all glow-orange"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative glass-effect border-2 border-blue-500/50 rounded-xl p-6 w-full max-w-lg shadow-2xl shadow-blue-500/20">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
            <Info size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-michroma text-white mb-3">Information</h3>
            <p className="text-white/70 font-space text-sm mb-4">
              Here's some important information you should know about this feature.
            </p>
            <ul className="space-y-2 text-white/60 font-space text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Feature is available in Pro plan
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Supports all major browsers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Regular updates included
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="gradient-orange px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo component to show modals
export const ModalDemo = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => setBasicOpen(true)}
        className="gradient-orange px-5 py-2.5 rounded-lg font-space font-semibold hover:opacity-90 transition-all"
      >
        Basic Modal
      </button>
      <button
        onClick={() => setConfirmOpen(true)}
        className="glass-effect border-2 border-orange-500/50 px-5 py-2.5 rounded-lg font-space font-semibold hover:glass-effect-orange transition-all"
      >
        Confirm Modal
      </button>
      <button
        onClick={() => setSuccessOpen(true)}
        className="glass-effect border-2 border-green-500/50 px-5 py-2.5 rounded-lg font-space font-semibold hover:bg-green-500/10 transition-all"
      >
        Success Modal
      </button>
      <button
        onClick={() => setInfoOpen(true)}
        className="glass-effect border-2 border-blue-500/50 px-5 py-2.5 rounded-lg font-space font-semibold hover:bg-blue-500/10 transition-all"
      >
        Info Modal
      </button>

      <BasicModal isOpen={basicOpen} onClose={() => setBasicOpen(false)} />
      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          setConfirmOpen(false);
          alert("Confirmed!");
        }}
      />
      <SuccessModal isOpen={successOpen} onClose={() => setSuccessOpen(false)} />
      <InfoModal isOpen={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
};
