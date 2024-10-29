import { useDispatch, useSelector } from "react-redux";
import Layout from "./modules/AppSidebar/layout/Layout"
import PersonalInfo from "./modules/AppSidebar/personalInfo/PersonalInfo";
import SecondForm from "./modules/forms/SecondForm";
import ThirdForm from "./modules/forms/ThirdForm";
import { decrement, increment } from "./store/CurrentStepSlice";
import { Button } from "./components/ui/button";

function App() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch()
  const Forms = [{
    title: 'Your info',
    component: <PersonalInfo />,
  }, {
    title: 'Select plan',
    component: <SecondForm />
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
          <Layout children={undefined} />
        </aside>
        <div className="flex-1 mx-auto container mt-20">
          {Forms[state.currentStep].component}
          <div className="flex items-center justify-around fixed bottom-10 left-40 right-0">
            <Button className="w-[6rem]" onClick={() => {
              if (state.currentStep > 0) {
                dispatch(decrement())
              }
            }}>Back</Button>

            <Button className="w-[6rem]" onClick={() => {
              if (state.currentStep < Forms.length - 1) {
                dispatch(increment())
              }
            }}>next step</Button>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
