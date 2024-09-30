import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

// colocando um comentário para fazer um commit porque deu erro

describe('Teste do componente App', () => {
  test('deve renderizar o formulário de login corretamente', () => {
    render(<App />)

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Acessar/i })).toBeInTheDocument()
  })

  test('deve mostrar "Acessado com Sucesso" para credenciais válidas', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'validacao@email.com' } })
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'validacaoOK' } })

    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }))

    expect(screen.getByText('Acessado com Sucesso')).toBeInTheDocument()
  })

  test('deve mostrar "Erro ao Acessar" para credenciais inválidas', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'invalido@email.com' } })
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'senhaInvalida' } })

    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }))

    expect(screen.getByText('Erro ao Acessar')).toBeInTheDocument()
  })

  test('deve mostrar "Erro ao Acessar" quando o e-mail está vazio', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'validacaoOK' } })

    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }))

    expect(screen.getByText('Erro ao Acessar')).toBeInTheDocument()
  })

  test('deve mostrar "Erro ao Acessar" quando a senha está vazia', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'validacao@email.com' } })

    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }))

    expect(screen.getByText('Erro ao Acessar')).toBeInTheDocument()
  })

  test('deve ter o estado inicial vazio para e-mail, senha e mensagem', () => {
    render(<App />)

    expect(screen.getByLabelText(/E-mail/i).value).toBe('')
    expect(screen.getByLabelText(/Senha/i).value).toBe('')
    expect(screen.queryByText(/Acessado com Sucesso/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Erro ao Acessar/i)).not.toBeInTheDocument()
  })
})
