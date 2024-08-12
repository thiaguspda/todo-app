# app/models/task.rb
class Task < ApplicationRecord
  # Validações

  # O título deve estar presente, ter entre 5 e 255 caracteres, e ser único
  validates :title, presence: true, length: { within: 5..255 }, uniqueness: true

  # A descrição pode ser opcional, mas se fornecida, deve ter no máximo 1000 caracteres
  validates :description, length: { maximum: 1000 }, allow_blank: true

  # O campo 'completed' deve ser booleano e tem um valor padrão de 'false'
  validates :completed, inclusion: { in: [true, false] }

  # Callbacks

  # Antes de salvar uma nova tarefa, define 'completed' como false, se não especificado
  before_validation :set_default_completed, on: :create

  # Após criar uma tarefa, pode-se enviar uma notificação ou registrar uma auditoria
  after_create :log_task_creation

  # Métodos Personalizados

  # Método de instância que marca a tarefa como concluída
  def mark_as_completed
    update(completed: true)
  end

  # Método de instância que alterna o status de conclusão da tarefa
  def toggle_completion
    update(completed: !completed)
  end

  # Método de classe que marca todas as tarefas como concluídas
  def self.mark_all_as_completed
    update_all(completed: true)
  end

  # Método de classe que retorna todas as tarefas incompletas
  def self.incomplete_tasks
    where(completed: false)
  end

  # Método de classe que retorna todas as tarefas concluídas
  def self.completed_tasks
    where(completed: true)
  end

  private

  # Define o valor padrão de 'completed' como false se não for especificado
  def set_default_completed
    self.completed = false if completed.nil?
  end

  # Exemplo de callback que poderia ser usado para registrar a criação de uma tarefa
  def log_task_creation
    Rails.logger.info "Task '#{title}' was created at #{created_at}."
    # Pode-se também enviar uma notificação ou realizar outra ação aqui
  end
end
