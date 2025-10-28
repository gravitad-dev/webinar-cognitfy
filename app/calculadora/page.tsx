'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CalculadoraPage = () => {
  // Calculator state
  const [processName, setProcessName] = useState('')
  const [resourceCount, setResourceCount] = useState<string | number>(1)
  const [monthlyCost, setMonthlyCost] = useState<string | number>(2800)
  const [dailyMinutes, setDailyMinutes] = useState<string | number>(90)
  const [businessType, setBusinessType] = useState('')
  const [processComplexity, setProcessComplexity] = useState('')
  const [processUrgency, setProcessUrgency] = useState('')
  const [peakHours, setPeakHours] = useState('')
  const [currentAutomation, setCurrentAutomation] = useState('')
  const [priorityLevel, setPriorityLevel] = useState('')

  // UI state
  const [currentStep, setCurrentStep] = useState(1)
  const [showResults, setShowResults] = useState(false)

  const totalSteps = 6

  // Business type options
  const businessTypes = [
    'e-commerce',
    'Servicios profesionales',
    'Atención al cliente',
    'Ventas',
    'Operaciones',
    'Educación',
    'Salud',
    'Administración de fincas',
    'Otro'
  ]

  // Process complexity options
  const complexityOptions = [
    { value: 'simple', label: 'Simple', description: 'Tareas básicas y repetitivas' },
    { value: 'moderate', label: 'Moderado', description: 'Requiere cierta lógica de decisión' },
    { value: 'complex', label: 'Complejo', description: 'Múltiples pasos y validaciones' }
  ]

  // Process urgency options
  const urgencyOptions = [
    { value: 'low', label: 'Baja', description: 'No es crítico, puede esperar' },
    { value: 'medium', label: 'Media', description: 'Importante para el funcionamiento' },
    { value: 'high', label: 'Alta', description: 'Crítico para el negocio' },
    { value: 'urgent', label: 'Urgente', description: 'Bloquea operaciones diarias' }
  ]

  // Peak hours options
  const peakHoursOptions = [
    { value: 'morning', label: 'Mañana (9-12h)', description: 'Horario de mayor actividad' },
    { value: 'afternoon', label: 'Tarde (14-17h)', description: 'Pico de consultas' },
    { value: 'evening', label: 'Noche (19-22h)', description: 'Después del horario laboral' },
    { value: 'constant', label: 'Constante', description: 'Actividad distribuida todo el día' }
  ]

  // Current automation options
  const automationOptions = [
    { value: 'none', label: 'Ninguna', description: 'Todo es manual' },
    { value: 'basic', label: 'Básica', description: 'Algunas herramientas simples' },
    { value: 'partial', label: 'Parcial', description: 'Algunos pasos automatizados' },
    { value: 'advanced', label: 'Avanzada', description: 'Sistema integrado' }
  ]

  // Priority level options
  const priorityOptions = [
    { value: 'low', label: 'Baja', description: 'No urgente, puede esperar' },
    { value: 'medium', label: 'Media', description: 'Importante para el negocio' },
    { value: 'high', label: 'Alta', description: 'Crítico, necesita solución rápida' },
    { value: 'urgent', label: 'Urgente', description: 'Bloquea operaciones' }
  ]

  // Function to show results when button is clicked
  const handleCalculateClick = () => {
    setShowResults(true)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Calculator calculations using the exact formula
  const dailyMinutesNum = Number(dailyMinutes) || 0
  const resourceCountNum = Number(resourceCount) || 1
  const monthlyCostNum = Number(monthlyCost) || 0
  
  const hourlyRate = (monthlyCostNum * resourceCountNum) / 150  // (coste recursos * cantidad)/150 = coste hora
  const dailyHours = dailyMinutesNum / 60  // tiempo en horas por día
  const dailyCost = hourlyRate * dailyHours  // coste hora * tiempo dedicado = coste día
  const monthlyCostProcess = dailyCost * 22  // coste día * 22 = coste mes
  const annualCurrentCost = monthlyCostProcess * 12  // coste mes * 12 = coste año
  
  // Enhanced calculations based on additional factors
  const complexityMultiplier = processComplexity === 'complex' ? 1.3 : processComplexity === 'moderate' ? 1.1 : 1
  const totalAnnualCost = annualCurrentCost * complexityMultiplier
  
  // Savings calculation with enhanced factors
  const baseSavings = totalAnnualCost * 0.70 // ahorro base del 70%
  const automationBonus = currentAutomation === 'none' ? 0.1 : currentAutomation === 'basic' ? 0.05 : 0 // Bonus por falta de automatización
  const annualSavings = baseSavings + (totalAnnualCost * automationBonus)
  
  // Additional metrics
  const monthlySavings = annualSavings / 12
  const dailySavings = annualSavings / 365
  const roi = (annualSavings / 2400) * 100 // ROI basado en coste de Cognitfy (200€/mes)
  const paybackPeriod = 2400 / monthlySavings // Meses para recuperar inversión

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <Image
          src="/images/esferas.svg"
          alt="Background spheres"
          width={1722}
          height={715}
          className="h-auto w-full opacity-60"
          priority
        />
      </div>
      <div className="absolute -left-1/4 bottom-0 flex items-end justify-start opacity-20">
        <Image
          src="/images/looper.svg"
          alt="Background pattern"
          width={2545}
          height={1934}
          className="h-auto w-[1400px]"
          priority
        />
      </div>
      <div className="absolute -right-1/4 bottom-0 flex items-end justify-end opacity-20">
        <Image
          src="/images/looper.svg"
          alt="Background pattern"
          width={2545}
          height={1934}
          className="h-auto w-[1400px] scale-x-[-1]"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-2 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Calculadora de Ahorro Inteligente
            </h1>
            <p className="mt-2 text-lg text-gray-300 sm:text-xl">
              Descubre cuánto puedes ahorrar automatizando tus procesos con Cognitfy
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="relative py-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
              <span>Paso {currentStep} de {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% completado</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="px-6 py-4 sm:px-8 sm:py-6">
            {!showResults ? (
              <div className="space-y-8">
                {/* Current Process Summary - Always Visible */}
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Proceso Actual
                  </h3>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Descripción del proceso:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {processName ? processName : `${resourceCountNum === 1 ? 'Una persona' : `${resourceCountNum} personas`} del equipo ${resourceCountNum === 1 ? 'dedica' : 'dedican'} ${dailyMinutesNum} minutos al día a revisar los mensajes que han llegado desde la web, mail o WhatsApp y distribuirlos a quien corresponda (presupuestos, pedidos, atención al cliente, etc.)`}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-sm font-medium text-gray-700">Recursos dedicados:</span>
                          <span className="text-sm font-semibold text-gray-900">{resourceCountNum} {resourceCountNum === 1 ? 'persona' : 'personas'}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-sm font-medium text-gray-700">Coste de los recursos:</span>
                          <span className="text-sm font-semibold text-gray-900">{monthlyCostNum.toLocaleString('es-ES')}€/mes</span>
                        </div>
                        
                        <p className="text-xs text-gray-500">
                          Coste total mensual de la persona para la empresa incluyendo seguridad social y otros costes
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex justify-between items-center">
                          <span className="text-base font-bold text-red-800">Coste del proceso:</span>
                          <span className="text-2xl font-bold text-red-600">{annualCurrentCost.toLocaleString('es-ES')}€/año</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Calculadas las horas dedicadas por la persona a razón de {dailyMinutesNum} minutos al día de lunes a viernes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step 1: Basic Process Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Información básica del proceso</h2>
                      <p className="mt-2 text-gray-600">Empecemos con los datos fundamentales</p>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="processName" className="block text-sm font-semibold text-gray-900 mb-2">
                          Describe tu proceso
                        </label>
                        <input
                          type="text"
                          id="processName"
                          value={processName}
                          placeholder="Ej: Gestión de consultas y pedidos"
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3 text-gray-900"
                          onChange={(e) => setProcessName(e.target.value)}
                        />
                        <p className="text-xs text-gray-500 mt-1">Describe brevemente el proceso a automatizar</p>
                      </div>

                      <div>
                        <label htmlFor="businessType" className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿En qué sector trabajas?
                        </label>
                        <select
                          id="businessType"
                          value={businessType}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3 text-gray-900"
                          onChange={(e) => setBusinessType(e.target.value)}
                        >
                          <option value="">Selecciona un sector</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Resources */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Recursos humanos</h2>
                      <p className="mt-2 text-gray-600">Cuéntanos sobre el equipo involucrado</p>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="resourceCount" className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Cuántas personas participan?
                        </label>
                        <input
                          type="number"
                          id="resourceCount"
                          min="1"
                          max="10"
                          value={resourceCount}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3 text-gray-900"
                          onChange={(e) => setResourceCount(e.target.value)}
                        />
                        <p className="text-xs text-gray-500 mt-1">Número de personas que participan en este proceso</p>
                      </div>

                      <div>
                        <label htmlFor="monthlyCost" className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Cuánto cuesta cada persona al mes?
                        </label>
                        <input
                          type="number"
                          id="monthlyCost"
                          min="1000"
                          max="10000"
                          value={monthlyCost}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3 text-gray-900"
                          onChange={(e) => setMonthlyCost(e.target.value)}
                        />
                        <p className="text-xs text-gray-500 mt-1">Salario + cargas sociales por persona</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Time and Complexity */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Tiempo y complejidad</h2>
                      <p className="mt-2 text-gray-600">¿Cuánto tiempo se dedica y qué tan complejo es?</p>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="dailyMinutes" className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Cuántos minutos al día se dedica?
                        </label>
                        <input
                          type="number"
                          id="dailyMinutes"
                          min="1"
                          max="480"
                          value={dailyMinutes}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3 text-gray-900"
                          onChange={(e) => setDailyMinutes(e.target.value)}
                        />
                        <p className="text-xs text-gray-500 mt-1">Tiempo en tareas repetitivas por persona</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Qué tan complejo es el proceso?
                        </label>
                        <div className="space-y-2">
                          {complexityOptions.map((option) => (
                            <label key={option.value} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="processComplexity"
                                value={option.value}
                                checked={processComplexity === option.value}
                                onChange={(e) => setProcessComplexity(e.target.value)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                              />
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{option.label}</div>
                                <div className="text-xs text-gray-500">{option.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Process Urgency and Peak Hours */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Urgencia y patrones</h2>
                      <p className="mt-2 text-gray-600">¿Qué tan urgente es este proceso y cuándo es más activo?</p>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Qué tan urgente es este proceso?
                        </label>
                        <div className="space-y-2">
                          {urgencyOptions.map((option) => (
                            <label key={option.value} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="processUrgency"
                                value={option.value}
                                checked={processUrgency === option.value}
                                onChange={(e) => setProcessUrgency(e.target.value)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                              />
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{option.label}</div>
                                <div className="text-xs text-gray-500">{option.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          ¿Cuándo es más activo?
                        </label>
                        <div className="space-y-2">
                          {peakHoursOptions.map((option) => (
                            <label key={option.value} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="peakHours"
                                value={option.value}
                                checked={peakHours === option.value}
                                onChange={(e) => setPeakHours(e.target.value)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                              />
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{option.label}</div>
                                <div className="text-xs text-gray-500">{option.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Current Automation */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Automatización actual</h2>
                      <p className="mt-2 text-gray-600">¿Qué nivel de automatización tienes ahora?</p>
                    </div>
                    
                    <div className="space-y-4">
                      {automationOptions.map((option) => (
                        <label key={option.value} className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="currentAutomation"
                            value={option.value}
                            checked={currentAutomation === option.value}
                            onChange={(e) => setCurrentAutomation(e.target.value)}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="ml-4">
                            <div className="text-lg font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 6: Priority */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">Prioridad del proyecto</h2>
                      <p className="mt-2 text-gray-600">¿Qué tan urgente es automatizar este proceso?</p>
                    </div>
                    
                    <div className="space-y-4">
                      {priorityOptions.map((option) => (
                        <label key={option.value} className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="priorityLevel"
                            value={option.value}
                            checked={priorityLevel === option.value}
                            onChange={(e) => setPriorityLevel(e.target.value)}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="ml-4">
                            <div className="text-lg font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  
                  {currentStep < totalSteps ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      onClick={handleCalculateClick}
                      className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 font-semibold"
                    >
                      Calcular Ahorro
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Results Section */
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu Análisis de Ahorro</h2>
                  <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Basado en tus respuestas, aquí está tu análisis personalizado de ahorro con Cognitfy
                  </p>
                </div>

                {/* Main Results Grid */}
                <div className="grid gap-5 lg:grid-cols-2">
                  {/* Current Cost Analysis */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-red-50 border-b border-red-100 px-5 py-3">
                        <h3 className="text-base font-bold text-red-700 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          Coste Actual del Proceso
                        </h3>
                      </div>
                      
                      <div className="p-4">
                        <div className="space-y-2.5">
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                            <span className="text-sm text-gray-600">Proceso:</span>
                            <span className="text-sm font-semibold text-gray-900 text-right max-w-xs">{processName || 'Sin especificar'}</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                            <span className="text-sm text-gray-600">Recursos:</span>
                            <span className="text-sm font-semibold text-gray-900">{resourceCountNum} {resourceCountNum === 1 ? 'persona' : 'personas'}</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                            <span className="text-sm text-gray-600">Tiempo diario:</span>
                            <span className="text-sm font-semibold text-gray-900">{dailyMinutesNum} minutos</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                            <span className="text-sm text-gray-600">Urgencia:</span>
                            <span className="text-sm font-semibold text-gray-900">
                              {processUrgency === 'low' ? 'Baja' : 
                               processUrgency === 'medium' ? 'Media' : 
                               processUrgency === 'high' ? 'Alta' : 
                               processUrgency === 'urgent' ? 'Urgente' : 'Media'}
                            </span>
                          </div>
                          
                          <div className="bg-red-50 rounded-lg p-3 mt-3 border border-red-100">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-bold text-red-800">Coste anual total:</span>
                              <span className="text-xl font-bold text-red-600">{totalAnnualCost.toLocaleString('es-ES')}€</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-blue-50 border-b border-blue-100 px-5 py-3">
                        <h3 className="text-base font-bold text-blue-700 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Detalles del Cálculo
                        </h3>
                      </div>
                      
                      <div className="p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center py-1.5">
                            <span className="text-sm text-gray-600">Coste base anual:</span>
                            <span className="text-sm font-semibold text-gray-900">{annualCurrentCost.toLocaleString('es-ES')}€</span>
                          </div>
                          <div className="flex justify-between items-center py-1.5">
                            <span className="text-sm text-gray-600">Factor complejidad:</span>
                            <span className="text-sm font-semibold text-gray-900">x{complexityMultiplier}</span>
                          </div>
                          <div className="flex justify-between items-center py-1.5">
                            <span className="text-sm text-gray-600">Urgencia del proceso:</span>
                            <span className="text-sm font-semibold text-gray-900">
                              {processUrgency === 'low' ? 'Baja' : 
                               processUrgency === 'medium' ? 'Media' : 
                               processUrgency === 'high' ? 'Alta' : 
                               processUrgency === 'urgent' ? 'Urgente' : 'Media'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Savings Analysis */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-green-50 border-b border-green-100 px-5 py-3">
                        <h3 className="text-base font-bold text-green-700 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          Ahorro con Cognitfy
                        </h3>
                      </div>
                      
                      <div className="p-4">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-green-600 mb-1">
                            {annualSavings.toLocaleString('es-ES')}€
                          </div>
                          <div className="text-sm text-green-700 font-semibold">Ahorro anual</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-lg font-bold text-green-600 mb-0.5">{monthlySavings.toLocaleString('es-ES')}€</div>
                            <div className="text-xs text-green-700 font-medium">Mensual</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-lg font-bold text-green-600 mb-0.5">{dailySavings.toLocaleString('es-ES')}€</div>
                            <div className="text-xs text-green-700 font-medium">Diario</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-purple-50 border-b border-purple-100 px-5 py-3">
                        <h3 className="text-base font-bold text-purple-700 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          ROI y Recuperación
                        </h3>
                      </div>
                      
                      <div className="p-4 space-y-4">
                        {/* ROI */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-xs text-purple-700 font-medium">Retorno de Inversión</div>
                                <div className="text-2xl font-bold text-purple-600">{roi.toFixed(0)}%</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">por cada €1</div>
                              <div className="text-sm font-bold text-purple-600">ganas €{(roi / 100).toFixed(2)}</div>
                            </div>
                          </div>
                          <div className="text-xs text-purple-600">ROI anual esperado</div>
                        </div>

                        {/* Payback Period */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-xs text-blue-700 font-medium">Recuperación</div>
                                <div className="text-2xl font-bold text-blue-600">{paybackPeriod.toFixed(1)}</div>
                              </div>
                            </div>
                            <div className="text-sm text-blue-700 font-semibold">meses</div>
                          </div>
                          <div className="text-xs text-blue-600">Tiempo para recuperar tu inversión</div>
                        </div>

                        {/* Cost */}
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                              <span className="text-sm text-gray-600">Inversión mensual</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs text-gray-500 mr-1">desde</span>
                              <span className="text-lg font-bold text-gray-900">200€</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-xl p-6 text-center text-white shadow-lg">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-2">¿Listo para empezar a ahorrar?</h3>
                    <p className="text-sm mb-5 text-purple-100">
                      Agenda una demo gratuita y descubre cómo implementar esta automatización en tu negocio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="https://calendly.com/gravitad/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-lg bg-white text-purple-600 font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-md"
                      >
                        Agendar Demo Gratuita
                      </Link>
                      <button
                        onClick={() => {
                          setShowResults(false)
                          setCurrentStep(1)
                        }}
                        className="px-6 py-2.5 rounded-lg border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-purple-600 transition-all duration-200"
                      >
                        Recalcular
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CalculadoraPage
