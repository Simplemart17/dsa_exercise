import re

def decode(file):
  # open the file
  f = open(file, "r")

  # read file
  content = f.read()

  # initialize the dictionary to store the file contents as key-value pairs
  word_dict = {}

  # initialize the variable to store the decoded message
  decoded_message = ""
  
  # Initialize a new list to store the last numbers from created pyramid
  last_numbers = []
  

  # create a dictionary
  for line in content.splitlines():
    match = re.match(r"(\d+) (\w+)", line)
    if match:
     count, word = match.groups()
     word_dict[int(count)] = word
  
  # create a list from the dictionary keys
  sorted_dict_key = sorted(word_dict.keys())

  # calculate the number of rows for the pyramid
  num_rows = int((-1 + (1 + 8 * len(sorted_dict_key)) ** 0.5) / 2)
  index = 0
  
  # Create the pyramid from the keys and store the last numbers in the new list
  for i in range(1, num_rows + 1):
    # Append the last number from the current row to the new list
    last_numbers.append(sorted_dict_key[index + i - 1])
    
    # Move to the next line for the next row
    index += i
  
  # loop through the last numbers list and get the corresponding text from the dictionary
  # append the text to the the decoded message variable
  for i in last_numbers:
    decoded_message += word_dict[i].lower() + " "
  print(decoded_message)

message_file = "DecodeFile/coding_qual_input.txt"
decode(message_file)