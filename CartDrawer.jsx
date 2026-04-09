import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300"
      />
      
      <div
        className="fixed top-0 right-0 h-screen w-full max-w-md bg-dark border-l border-white/10 z-[70] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 transform translate-x-0"
      >
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} className="text-gold" />
            <h2 className="text-xl font-black uppercase tracking-widest">My Order</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mb-6 border border-white/5">
                <ShoppingBag size={40} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cart is empty</h3>
              <p className="text-gray-500 text-sm">Looks like you haven't added any delicacies yet.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-sm tracking-tight">{item.name}</h4>
                    <span className="font-black text-gold text-sm">₹{item.price * item.quantity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gold hover:text-black rounded transition-all"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-xs font-black">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gold hover:text-black rounded transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-8 border-t border-white/10 bg-dark-lighter space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Amount</span>
              <span className="text-3xl font-black text-white">₹{total}</span>
            </div>
            <button
              className="w-full bg-gold hover:bg-gold-light text-black py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest font-medium">
              Order will be confirmed via WhatsApp
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
