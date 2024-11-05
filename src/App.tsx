import Layout from "./modules/AppSidebar/layout/Layout"
import PersonalInfo from "./modules/forms/personalInfo/PersonalInfo";
import SelectPlan from "./modules/forms/Select plan/SelectPlan";
import ThirdForm from "./modules/forms/ThirdForm";
import { useState } from "react";
function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const Forms = [{
    title: 'Your info',
    component: <PersonalInfo currentStep={currentStep} setCurrentStep={setCurrentStep} />,
  }, {
    title: 'Select plan',
    component: <SelectPlan currentStep={currentStep} setCurrentStep={setCurrentStep} />
  }, {
    title: 'Add-ons',
    component: <ThirdForm />
  }, {
    title: 'Summary',
    component: <ThirdForm />
  }]

  return (
    <>
      <main className="flex gap-2">
        <aside>
          <Layout currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </aside>
        <div className="flex-1 mx-auto container mt-20">
          {Forms[currentStep].component}
        </div>
      </main>
    </>
  )
}

export default App
