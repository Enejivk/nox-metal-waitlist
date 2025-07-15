import React, { useState } from "react";
import { CheckCircle, Mail, User } from "lucide-react";
import Logo from "./assets/10001.png";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: "",
      email: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (newErrors.fullName || newErrors.email) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[black] via-gray-900 to-black relative overflow-hidden font-inter">
      {/* Animated diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom left to center line */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="diagonal-line-1"></div>
        </div>

        {/* Top right to center line */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="diagonal-line-2"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Company Logo Placeholder */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
              <img src={Logo} alt="company's logo" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Nox Metals</h1>
            <p className="text-gray-400 text-lg">
              The future of metal sourcing and production.
            </p>
          </div>

          {/* Glass morphism form card */}
          <div className="backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Get early access to the fastest metal sourcing platform in
                    North America.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name Field */}
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Joining...
                      </div>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-400">
                  We’ll notify you when Nox Metals is ready to streamline your
                  metal sourcing and production.
                </p>
              </div>
            )}
          </div>

          {/* Y Combinator Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">Y</span>
              </div>
              <span className="text-gray-400 text-sm">
                Backed by Y Combinator
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
