class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :garage ]
  require "google_drive"

  def home
    session = GoogleDrive::Session.from_config("secrets.yml")
    @ws = session.spreadsheet_by_key("1NqZVMNxJUHP616obEGG_KcpBDMljjaMlMYwHId8XcXU").worksheets[0]
    @vans = @ws[7, 8]
  end

  def garage


  end
end


# Rails.application.secrets.google_application_credentials
