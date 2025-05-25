import { render, screen } from '@testing-library/react'
import { HomePage } from '../../components/HomePage'

describe('HomePage', () => {
  it('should render the main heading', () => {
    render(<HomePage />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Welcome to UEV Pitch')
  })

  it('should render a subtitle', () => {
    render(<HomePage />)
    
    const subtitle = screen.getByText(/Apply for funding with AI-powered feedback/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('should render a call-to-action button', () => {
    render(<HomePage />)
    
    const button = screen.getByRole('button', { name: /start your application/i })
    expect(button).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(<HomePage />)
    
    // Should have a main element for accessibility
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
}) 