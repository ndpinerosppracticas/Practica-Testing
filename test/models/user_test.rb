require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup 
  	@user = users :valid
  end
  test 'valid_user' do
  	assert @user.valid?, 'User is valid'
  end
    test 'invalid no email user' do
    @user.email = nil
    refute @user.valid?
    assert_not_nil @user.errors[:email]
  end
  test 'invalid user no name' do
    @user.name = nil
    refute @user.valid?
    assert_not_nil @user.errors[:name]
  end

  test '#posts' do
    assert_equal 2, @user.posts.size
  end
end
